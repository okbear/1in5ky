"""Refresh public World Bank / UN IGME infant and under-5 mortality estimates.
Run explicitly from the repository root; never contacts the API during play.
"""
import json
import argparse
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor

parser = argparse.ArgumentParser()
parser.add_argument('--as-of', default=datetime.now(timezone.utc).date().isoformat())
args = parser.parse_args()

countries = {
 'britain':'GBR','france':'FRA','germany':'DEU','italy':'ITA','netherlands':'NLD',
 'usa':'USA','canada':'CAN','india':'IND','pakistan':'PAK','bangladesh':'BGD',
 'indonesia':'IDN','philippines':'PHL','thailand':'THA','vietnam':'VNM','malaysia':'MYS',
 'nigeria':'NGA','ghana':'GHA','kenya':'KEN','congo':'COD','senegal':'SEN','south_africa':'ZAF',
 'egypt':'EGY','iraq':'IRQ','jordan':'JOR','tunisia':'TUN','libya':'LBY','syria':'SYR',
 'russia':'RUS','ukraine':'UKR','belarus':'BLR','kazakhstan':'KAZ',
 'brazil':'BRA','mexico':'MEX','argentina':'ARG','colombia':'COL','peru':'PER',
 'japan':'JPN','china':'CHN','korea':'KOR','ethiopia':'ETH','spain':'ESP'
}
indicators = ['SP.DYN.IMRT.IN', 'SH.DYN.MORT']

def fetch(indicator):
 url = 'https://api.worldbank.org/v2/country/' + ';'.join(countries.values()) + '/indicator/' + indicator + '?date=1960:2024&per_page=20000&format=json'
 with urlopen(url, timeout=90) as response:
  result = json.load(response)
 if not isinstance(result, list) or len(result) != 2 or result[0]['pages'] != 1:
  raise ValueError('Unexpected or incomplete World Bank response')
 return indicator, result[1]

series = {}
reverse = {code: country for country, code in countries.items()}
for indicator, rows in ThreadPoolExecutor(max_workers=2).map(fetch, indicators):
 for row in rows:
  country = reverse.get(row['countryiso3code'])
  if country is None or row['value'] is None:
   continue
  year = str(row['date'])
  pair = series.setdefault(country, {}).setdefault(year, [None, None])
  pair[indicators.index(indicator)] = row['value']
for country, years in list(series.items()):
 series[country] = {year: pair for year, pair in sorted(years.items()) if all(v is not None for v in pair) and 0 <= pair[0] <= pair[1] < 1000}
 if not series[country]:
  del series[country]
output = {'edition':'World Bank WDI / UN IGME, API retrieved ' + args.as_of, 'indicators':indicators, 'series':series}
Path('src/lib/data/annualMortality.json').write_text(json.dumps(output, ensure_ascii=False, separators=(',',':'))+'\n')
print(f'Wrote {len(series)} countries, {sum(map(len,series.values()))} country-years')
