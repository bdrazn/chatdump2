import { StatCard } from '../ui/stat-card';
import { Building2, Users, DollarSign, MessageSquare } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/lib/utils';

interface StatsGridProps {
  stats: {
    properties: {
      total: number;
      active: number;
      pending: number;
      sold: number;
    };
    contacts: {
      total: number;
      newThisMonth: number;
      interested: number;
      notInterested: number;
    };
    deals: {
      active: number;
      value: number;
      closedThisMonth: number;
      pipeline: number;
    };
    messages: {
      sent: number;
      delivered: number;
      responses: number;
      responseRate: number;
    };
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Properties"
        value={formatNumber(stats.properties.total)}
        icon={Building2}
        color="blue"
        trend={{
          value: 12,
          label: "vs last month"
        }}
      />
      <StatCard
        title="Contacts"
        value={formatNumber(stats.contacts.total)}
        icon={Users}
        color="purple"
        trend={{
          value: 8,
          label: "vs last month"
        }}
      />
      <StatCard
        title="Active Deals"
        value={formatCurrency(stats.deals.value)}
        icon={DollarSign}
        color="green"
        trend={{
          value: 24,
          label: "vs last month"
        }}
      />
      <StatCard
        title="Message Response Rate"
        value={`${stats.messages.responseRate}%`}
        icon={MessageSquare}
        color="amber"
        trend={{
          value: 5,
          label: "vs last month"
        }}
      />
    </div>
  );
}

# Dependency Checker for stats-grid.tsx
def dependency_checker():
    import os
    import sys

    dependencies = ["lucide-react", "@/lib/utils", "../ui/stat-card"]
    for dep in dependencies:
        try:
            __import__(dep)  # Attempt to import the module (Python) or check its existence
        except ImportError:
            print(f"Dependency {dep} is missing in /mnt/data/dump-main/dump-main/src/components/dashboard/stats-grid.tsx!")
            sys.exit(1)  # Halt execution

    dependents = []
    for dep in dependents:
        if not os.path.exists(dep):
            print(f"Dependent file {dep} is missing!")
            sys.exit(1)  # Halt execution

dependency_checker()
