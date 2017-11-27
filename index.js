const port = 5000  


// Definimos funciones para luego usarlas al recibir una petición en el router
function getHTML(req, res) {  
  res.sendFile('./subirimagenes.html', options, (err) => {
    if (err) throw err;
    console.log('Sirviendo subirimagenes.html')
  })
}

// Definimos las rutas
App.get('/', getHTML)

