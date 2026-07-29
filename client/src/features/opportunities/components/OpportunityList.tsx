import { useEffect, useState } from 'react';

import OpportunityCard from './OpportunityCard';

import { browseOpportunities } from '../services/browseOpportunity.service';

import type { Opportunity } from '../types/opportunityList.types';

interface OpportunityListProps {
  search: string;
}

export default function OpportunityList({ search }: OpportunityListProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await browseOpportunities();
        setOpportunities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const keyword = search.toLowerCase();

    return (
      opportunity.title.toLowerCase().includes(keyword) ||
      opportunity.organization.toLowerCase().includes(keyword) ||
      opportunity.category.toLowerCase().includes(keyword)
    );
  });

  if (loading) {
    return <div className="loading">Loading opportunities...</div>;
  }

  if (filteredOpportunities.length === 0) {
    return <div className="loading">No opportunities found.</div>;
  }

  return (
    <div className="opportunity-list">
      {filteredOpportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}
