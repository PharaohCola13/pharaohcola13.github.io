## convert-os.py
## Import the modules to handle JSON & YAML
import yaml
import json

## Create a variable to hold the data to import
os_list = {}

## Read the YAML file
with open("content.yml") as infile:
    os_list = yaml.load(infile, Loader=yaml.FullLoader)
with open("content.json", 'w') as outfile:
    json.dump(os_list, outfile, indent=4)