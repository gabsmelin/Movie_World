import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/', async(req, resp) => {
    try {
        let a = await db.infob_mw_filmes.findAll({
          include:[{
            model: db.infob_mw_tbatores,
            as: 'infob_mw_tbatores',
            require: true}],
          limit:9,
          order: [['qtd_likes','desc']]
        })
        resp.send(a);
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})

app.get('/fi', async(req, resp) => {
  try {
      let a = await db.infob_mw_filmes.findAll({limit: 9},{order: [['ds_avaliacao', 'desc']]});
        a = a.map(item => {
          return {
            id: item.id_filme,
            nome: item.nm_filme,
            genero: item.ds_genero,
            lancamento: item.ano_lancamento,
            diretor: item.nm_diretor, 
            sinopse: item.ds_sinopse,
            avaliacao: item.ds_avaliacao, 
            descricao: item.ds_descricao, 
            plataforma: item.ds_plataforma, 
            img_maior: item.img_capa_maior, 
            img_menor: item.img_capa_menor
          }
        })
      resp.send(a);
  } catch(e) {
      resp.send({erro: e.toString()})
  }
})


export default app