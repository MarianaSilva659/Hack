var http = require('http')
var axios = require('axios')
const { parse } = require('querystring');
const WebSocket = require('ws');

// WebSocket server address
const serverAddress = 'ws://localhost:8080'; // Replace with the actual WebSocket server address
var ws;
function createWebSocketConnection(content) {
     ws = new WebSocket(serverAddress);

    ws.on('open', () => {
        console.log('Connected to WebSocket server');

        ws.send(content);

        setTimeout(() => {
            ws.close();
        }, 3000);
    });

    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
}

var current_room_id = 0;

// Aux functions
function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

// Server creation


var tieSwiperServer = http.createServer((req, res) => {
    // Logger: what was requested and when it was requested
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    // Handling request
    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                 // get room
                if(/\/room\/\d+/.test(req.url)){
                    axios.get('http://localhost:3000' + req.url)
                    .then(resposta => {
                        let categorie = resposta.data.main_categorie;
                        let cards = resposta.data.references;
                        let query = "/" + categorie + "?";
                        for (let card in cards){
                            query += "id=" + card + "|";
                        }
                        query = query.substring(0, query.length-1);
                        axios.get('http://localhost:3000' + query)
                        .then(reply => {
                            res.json(Object.assign(reply, resposta));
                        })
                    })
                    .catch(erro => {
                        return res.status(400).json({ error: 'Error connecting to the db' });
                    })
                }else if(/\/room\/join\/\d+/.test(req.url)){
                       let aux = req.url.split('/');
                        let id = aux[length - 1];
                        axios.get('http://localhost:3000' + '/room/' + id)
                        .then(reply => {
                            reply.data.numP++;
                            axios.put('http://localhost:3000' + '/room/' + id, reply);
                            res.json(reply);
                        }).catch(err => {
                            res.status.json({ error: err.message });
                        });
                }
                else{
                    return res.status(404).json({ error: 'Rota inexistente' });
                }
                break
            case "POST":
                 if(/\/create/.test(req.url)){
            
                    collectRequestBodyData(req, result => {
                        if(result){
                        let categorie = result.main_categorie;
                        let query = "/" + categorie + "?_sort=release_date&order=desc&limit=1000&vote_average>=5|vote_average=0&";
                        for (let card in result.categories){
                            query += "genres.id=" + card + "|";
                        }
                        query = query.substring(0, query.length-1);
                        let w1 = 5;
                        let w2 = 2.5;
                        let w3 = 0.005;
                        axios.get('http://localhost:3000' + query).then(dados => {
                            dados.data.sort((a,b) => {
                                return w1*a.popularity + w2*a.vote_average + w3*a.release_date < w1*b.popularity + w2*b.vote_average + w3*b.release_date;
                            }); 
                            let i =0 ;
                           for (let d in dados.data){
                                if (i == 100){
                                    break;
                                }
                                result.data.references[id] = {swipes:0, hearted:false};
                                i++;
                        }
                            axios.put('http://localhost:3000/room/' + current_room_id, result) // Added colon after "http"
                                .then(resposta => {
                                    current_room_id++;
                                    res.status(200).json(resposta);
                                })
                                .catch(erro => {
                                    res.status(500).json(erro);
                                });
                 });}});
                }else if (/\/room\/right\/\d+/.test(req.url)){
                    collectRequestBodyData(req, result => {
                        if(result){
                    let aux = req.url.split('/');
                    let id = aux[length - 1];
                    axios.get('http://localhost:3000/room/' + id).then(dados => {
                           
                                dados.data.references[id].swipes++;
                                if ((dados.data.numP == 2 && dados.data.references[id].swipes == 2) || (dados.data.references[id].swipes / dados.data.numP > 0.65)){
                                    createWebSocketConnection(id);
                                }
                                
        
            
                }).catch(erro => {
                    res.status(500).json(erro);
                });
               }});
                }
                else if (/\/room\/up\/\d+/.test(req.url)){
                    collectRequestBodyData(req, result => {
                        if(result){
                    let aux = req.url.split('/');
                    let id = aux[length - 1];
                    axios.get('http://localhost:3000/room/' + id).then(dados => {
                        dados.data.references[id].swipes++;
                        dados.data.references[id].hearted = true;
                }).catch(erro => {
                    res.status(500).json(erro);
                });
               }});
                }        
                else if (/\/room\/down\/\d+/.test(req.url)){
                    collectRequestBodyData(req, result => {
                        if(result){
                    let aux = req.url.split('/');
                    let id = aux[length - 1];
                    axios.get('http://localhost:3000/room/' + id).then(dados => {
                            delete dados.data.references[id];    
                                createWebSocketConnection(-id);             
                }).catch(erro => {
                    res.status(500).json(erro);
                });
               }});
                }
                else{
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.end(templates.errorPage(`Pedido POST não suportado: ${req.url}`,d))
                }
                break;
            default: 
                // Outros metodos nao sao suportados
        }
    }
})

tieSwiperServer.listen(7777, ()=>{
    console.log("Servidor à escuta na porta 7777...")
})