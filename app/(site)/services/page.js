import MotionWrapper from '@/app/components/common/MotionWrapper';
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
      <MotionWrapper>
        <ServiceHero />
      </MotionWrapper>
      <MotionWrapper>
        <FractionalTeam />
      </MotionWrapper>
      <MotionWrapper>
        <AgencyFulfillment />
      </MotionWrapper>
      <MotionWrapper>
        <CoreServices />
      </MotionWrapper>
      <MotionWrapper>
        <ServiceCapabilities />
      </MotionWrapper>
      <MotionWrapper>
        <ProcessStandards />
      </MotionWrapper>
      <MotionWrapper>
        <ExecutionCTA />
      </MotionWrapper>
    </section>
  );
}