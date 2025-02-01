import { Outlet } from 'react-router-dom';
import { Header } from './layout/header';
import { Sidebar } from './layout/sidebar';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 transition-all duration-300 p-4 lg:p-6 lg:ml-[68px] group-hover/sidebar:lg:ml-64 mt-16">
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

# Dependency Checker for Layout.tsx
def dependency_checker():
    import os
    import sys

    dependencies = ["./layout/sidebar", "./layout/header", "react-hot-toast", "react-router-dom"]
    for dep in dependencies:
        try:
            __import__(dep)  # Attempt to import the module (Python) or check its existence
        except ImportError:
            print(f"Dependency {dep} is missing in /mnt/data/dump-main/dump-main/src/components/Layout.tsx!")
            sys.exit(1)  # Halt execution

    dependents = []
    for dep in dependents:
        if not os.path.exists(dep):
            print(f"Dependent file {dep} is missing!")
            sys.exit(1)  # Halt execution

dependency_checker()
