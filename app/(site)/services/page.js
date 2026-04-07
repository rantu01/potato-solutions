import AgencyFulfillment from '@/app/components/service/AgencyFulfillment';
import CoreServices from '@/app/components/service/CoreServices';
import ExecutionCTA from '@/app/components/service/ExecutionCTA';
import FractionalTeam from '@/app/components/service/FractionalTeam';
import ProcessStandards from '@/app/components/service/ProcessStandards';
import ServiceCapabilities from '@/app/components/service/ServiceCapabilities';
import ServiceHero from '@/app/components/service/ServiceHero';
import { ArrowRight } from 'lucide-react';
export default function service() {
  return (
    <section >
      <ServiceHero></ServiceHero>
      <FractionalTeam></FractionalTeam>
      <AgencyFulfillment></AgencyFulfillment>
      <CoreServices></CoreServices>
      <ServiceCapabilities></ServiceCapabilities>
      <ProcessStandards></ProcessStandards>
      <ExecutionCTA></ExecutionCTA>
    </section>
  );
}