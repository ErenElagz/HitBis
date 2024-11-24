import os
import sys

def tsxTemplate(name):
    return """import { View, Text } from 'react-native'
import React from 'react'
import styles from "./"""+name+""".style"

interface """+name+"""Props {}

const """+name+""": React.FC<"""+name+"""Props> = () => {
  return (
    <View>
      <Text>"""+name+"""</Text>
    </View>
  )
}

export default """+name+""""""

def styleTemplate():
    return """import {StyleSheet} from "react-native";
import Colors from "../../styles/colors";
import Fonts from "../../styles/fonts";
import RemSizes from "../../styles/dimensions";

export default StyleSheet.create({})"""

def indexTemplate(name):
    return "export {default} from \"./"+name+"\""

name = sys.argv[1]
if name.startswith("0"):
    name = name[1:]
else:
    name = name.capitalize()

base_path = "./"
src_path = os.path.join(base_path, "src")
components_path = os.path.join(src_path, "components")
new_component_path = os.path.join(components_path, name)
new_tsx_path = os.path.join(new_component_path, f"{name}.tsx")
new_style_path = os.path.join(new_component_path, f"{name}.style.ts")
index_path = os.path.join(new_component_path, "index.ts")

def create(name):
    os.makedirs(new_component_path)
    with open(new_tsx_path, "w") as file:
            file.write(tsxTemplate(name))
        
    with open(new_style_path, "w") as file:
        file.write(styleTemplate())

    with open(index_path, "w") as file:
        file.write(indexTemplate(name))

if os.path.exists(src_path):
    if os.path.exists(components_path):
        create(name)
    else:
        os.makedirs(components_path)
        create(name)
else:
    os.makedirs(src_path)