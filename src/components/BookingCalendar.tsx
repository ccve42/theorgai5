import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingCalendar: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"introductory-meeting"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full h-[600px] glassmorphism rounded-xl overflow-hidden">
      <Cal 
        namespace="introductory-meeting"
        calLink="aiorganization/introductory-meeting"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{
          layout:"month_view",
          theme:"dark"
        }}
      />
    </div>
  );
};

export default BookingCalendar;