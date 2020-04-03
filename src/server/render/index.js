// const host = `
// <!doctype html>
//      <html>
//        <head>
//           <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
//           <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
//           <title>Platzi Video</title>
//           <link href="http://localhost:/3000/css/app.d96b6e88fe2b707eb88b.css" rel="stylesheet">
//        </head>
//        <body>
//           <div id="app">${html}</div>
//           <script src="http://localhost:3000/js/modules.f18a989440812a1966db.dll.js">
//           </script><script src="http://localhost:/3000/js/app.d96b6e88fe2b707eb88b.js"></script>
//       </body>
//    </html>`;

// const host2 = `  <!DOCTYPE html>
//    <html>
//    <head>
//      <title>Platzi Video</title>
//      <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
//    </head>
//    <body>
//      <div id="app">${html}</div>
//      <script src="assets/app.js" type="text/javascript"></script>
//      <script src="assets/vendor.js" type="text/javascript"></script>
//    </body>
//  </html>`;

const render = (html) => {
  return ` 
  <!DOCTYPE  html>
     <html>
       <head>
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
          <title>Platzi Video</title>
          <link href="dist/css/app.d96b6e88fe2b707eb88b.css" rel="stylesheet">
       </head>
       <body>
          <div id="app">${html}</div>
          <script src="dist/js/modules.f18a989440812a1966db.dll.js"></script>
          <script src="dist/js/app.d96b6e88fe2b707eb88b.js"></script>
      </body>
   </html>
  `;
};

export default render;
