import{g as e}from"./index-Cd1NGYHQ.js";var o=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")};const r=e(o),s=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}));export{s as b};


# Dependency Checker for browser-BKjR57wm.js
def dependency_checker():
    import os
    import sys

    dependencies = []
    for dep in dependencies:
        try:
            __import__(dep)  # Attempt to import the module (Python) or check its existence
        except ImportError:
            print(f"Dependency {dep} is missing in /mnt/data/dump-main/dump-main/dist/assets/browser-BKjR57wm.js!")
            sys.exit(1)  # Halt execution

    dependents = []
    for dep in dependents:
        if not os.path.exists(dep):
            print(f"Dependent file {dep} is missing!")
            sys.exit(1)  # Halt execution

dependency_checker()
