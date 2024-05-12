Created a react web app ,
    In react,
        -> Created a new Component MyComponent inside a folder datadog. MyComponent component is used to integrate with the Datadog RUM (Real User Monitoring), at first imported a datadogRum from datadog/browser-rum by using the useEffect() datadogRum.init() funtion is called, the Configuration option includes applicationid , clientid, site, service, env ,version , and more. These options configure data reports to datadog

        ->Parallely, we need to download & setup the datadog agent manager and in webbrowser go to datadog api and create a new monitor to monitor your web-application 

        ->In MyComponent, when clicking the button Create New Monitor, an action is sent to the datadog using datadogRum.addAction() funtion, at the same time the component calls prop(true) this set the boolean values of dform variable in App.jsx as True.

        ->In Table.jsx , created a new table and mapped them by getting data from a db.json, with heading [Message,Type,Name,Query] , to get data from db.json axios is used to get from the json server.

        -> In Form.jsx , created a new form to get inputs from the user , where by default form wont get displayed, when user click on button [Create New Monitor] the boolean values of dform will be true and its passed as prop to Form Component when the boolean is true form gets displayed and when user onclick on submit dform variale's boolean values is false and form wont get displayed;