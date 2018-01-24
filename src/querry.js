import { Pool } from 'pg'

function conection(){
	 pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
}

export function Select(value) {
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
		console.log(value)
		if(value.where){
			var query = {
  			text: 'SELECT * FROM '+value.from+" WHERE id_li= $1",
  			values:[value.where]
  			}
		}else{
			var query = {
  			text: 'SELECT * FROM '+value.from,
  			}
		}

   console.log(query)
   return pool.query(query)
}
export function Insert(value){
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
			var query = {
  			text: 'INSERT INTO '+value.from+" "+value.val+' VALUES' +value.vals+' RETURNING *',
  			values:[...value.values],
  			}
  		console.log(query)
   return pool.query(query)

}

export function Delete(value){
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
			var query = {
  			text: 'DELETE FROM '+value.from+" WHERE "+value.id+"= $1",
  			values:[value.values]
  			}
  			console.log(query)
   return pool.query(query)

}
export function Update(value){
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
		console.log(value)
		if(value.where){
			var query = {
  			text: 'SELECT * FROM '+value.from+" WHERE id_it= $1",
  			values:[value.where]
  			}
		}else{
			var query = {
  			text: 'SELECT * FROM '+value.from,
  			}
		}

   console.log(query)
   return pool.query(query)

}
