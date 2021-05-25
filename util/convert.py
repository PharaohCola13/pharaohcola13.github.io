## convert-os.py
## Import the modules to handle JSON & YAML
import yaml
import json
import sys

## Create a variable to hold the data to import
os_list = {}

## Read the YAML file
with open(str(sys.argv[1]) + "content.yml") as infile:
    os_list = yaml.load(infile, Loader=yaml.FullLoader)
with open(str(sys.argv[1]) + "content.json", 'w') as outfile:
    json.dump(os_list, outfile, indent=4)
