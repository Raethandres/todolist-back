import { Pool } from 'pg'

function conection(){
	 pool = new Pool({connectionString:'postgres://mbdfzusjvgjvga:14771ec76fe86ac3f185bfde1e93e484b2c402b2499533007d0a7515b6456e88@ec2-54-235-220-220.compute-1.amazonaws.com:5432/d848clemua0f07'})
}

export function Select(value) {
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
		console.log(value)
		if(value.it){
			var query = {
  			text: 'SELECT * FROM '+value.from+" WHERE id_li= $1",
  			values:[value.it]
  			}
		}else{
			var query = {
  			text: 'SELECT * FROM '+value.from+" WHERE id_us= $1",
  			values:[value.where]
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

export function Query(value){
	const pool = new Pool({connectionString:'postgres://postgres:kara@localhost:5432/todo'})
	console.log(value)
   return pool.query(value)

}
