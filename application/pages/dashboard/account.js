import React from 'react';
import DashboardLayout from '../../components/layouts/dashboard';
import PrimaryBtn from '../../components/buttons/primary-btn';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const Account = () => {
  const PERCENTAGE = 75;

  return (
    <DashboardLayout title="Account" sidebar="inner">
      <div className="w-full max-w-screen-lg min-h-screen">
        <div className="flex flex-start items-start gap-x-10 mb-6">
          <div className="w-32 h-32">
            <CircularProgressbar
              value={PERCENTAGE}
              text={`${PERCENTAGE}%`}
              counterClockwise
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                // Text size
                textSize: '1.5rem',
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(0, 188, 176, ${PERCENTAGE / 100})`,
                textColor: '#5630FF',
                trailColor: '#DADEE3',
                backgroundColor: '#FAFAFA',
              })}
            />
          </div>
          <div className="w-full max-w-xs">
            <h3 className="text-title text-sm font-medium mb-3 uppercase">Account Information</h3>
            <p>Complete your account information to have full access to Oval</p>
            <div className="my-4">
              <PrimaryBtn
                placeholder="Complete my verification"
                width="w-56"
                onClick={() => null}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};


export default Account;
