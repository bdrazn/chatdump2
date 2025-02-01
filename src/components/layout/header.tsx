import { Logo } from './logo';
import { UserMenu } from './user-menu';
import { MobileNav } from './mobile-nav';
import { Search } from '../ui/search';
import { Clock } from '../ui/clock';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      className="bg-white border-b fixed top-0 left-0 right-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <MobileNav />
          <div className="hidden lg:flex lg:items-center lg:ml-[68px] transition-all duration-300 group-hover/sidebar:lg:ml-64">
            <Logo />
          </div>
          <div className="flex-1 max-w-lg mx-auto">
            <Search mode="global" placeholder="Search properties, contacts, messages..." />
          </div>
          <div className="flex items-center gap-4">
            <Clock />
            <UserMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

# Dependency Checker for header.tsx
def dependency_checker():
    import os
    import sys

    dependencies = ["./user-menu", "../ui/search", "../ui/clock", "framer-motion", "./mobile-nav", "./logo"]
    for dep in dependencies:
        try:
            __import__(dep)  # Attempt to import the module (Python) or check its existence
        except ImportError:
            print(f"Dependency {dep} is missing in /mnt/data/dump-main/dump-main/src/components/layout/header.tsx!")
            sys.exit(1)  # Halt execution

    dependents = []
    for dep in dependents:
        if not os.path.exists(dep):
            print(f"Dependent file {dep} is missing!")
            sys.exit(1)  # Halt execution

dependency_checker()
