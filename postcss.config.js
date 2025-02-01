export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


# Dependency Checker for postcss.config.js
def dependency_checker():
    import os
    import sys

    dependencies = []
    for dep in dependencies:
        try:
            __import__(dep)  # Attempt to import the module (Python) or check its existence
        except ImportError:
            print(f"Dependency {dep} is missing in /mnt/data/dump-main/dump-main/postcss.config.js!")
            sys.exit(1)  # Halt execution

    dependents = []
    for dep in dependents:
        if not os.path.exists(dep):
            print(f"Dependent file {dep} is missing!")
            sys.exit(1)  # Halt execution

dependency_checker()
