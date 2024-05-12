import React, { useEffect} from 'react';
import { datadogRum } from '@datadog/browser-rum';

const MyComponent = ({prop}) => {


  useEffect(()=>{
        datadogRum.init({
          applicationId: '73a18c91-4533-48c1-9669-34c324c7220f',
          clientToken: 'pub8fe5f0c9085e4fb05db7a25cb714bad3',
          // `site` refers to the Datadog site parameter of your organization
          // see https://docs.datadoghq.com/getting_started/site/
          site: 'us5.datadoghq.com',
          service: 'newproject',
          env: 'NewProject',
          // Specify a version number to identify the deployed version of your application in Datadog
          version: '1.0.0', 
          sessionSampleRate: 100,
          sessionReplaySampleRate: 100,
          trackUserInteractions: true,
          trackResources: true,
          trackLongTasks: true,
          defaultPrivacyLevel: 'mask-user-input',
});
  },[])

    function onclick (){
      // datadogRum.setGlobalContext('username','Ajith')
      // datadogRum.setGlobalContext(prop)
      // console.log(prop);
      datadogRum.addAction('Monitor Submitted')
      prop(true);
    }

  return(
    <div className='monitor'>
      <button onClick={onclick}>Create New Monitor</button>
    </div>
  )
}

export default MyComponent;
