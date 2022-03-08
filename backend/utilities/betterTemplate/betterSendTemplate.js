export const template = `<div style='background-color:powderblue; text-align:center;'>
            <h1>Snowflake alert - ${market}</h1>
            <h2>:The following queries in ${market} returned results that are not 0\n</h2>
            </div>
            <div id='queries'><div>
            <script>
            let failedQueries ='', i;
            for (i=0; i<= ${messages.length}; i++) {
            failedQueries = failedQueries + <b>Alert Message: ${messages[i].message} Query: ${messages[i].query} </b>;
            }
            document.getElementById('queries').innerHTML = failedQueries;
            </script>`
