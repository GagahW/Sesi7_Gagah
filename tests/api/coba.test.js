import fetch from 'node-fetch';
import { expect } from 'chai';
import Ajv from 'ajv';
import schema_post from '../schema/dummySchema.js';
import schema_get from '../schema/dummySchema2.js';

describe("API Test Suite coba", function(){

    it("Get Test", async function(){
        //tembak url dummyjson
        const hasil = await fetch('https://dummyjson.com/carts/1')

        //validasi http status nya harus 200
        expect(hasil.status, 'ada yang salah').to.equal(200)

        //validasi json schema
        const ajv = new Ajv()
        const data = await hasil.json();
        const cekcek = ajv.compile(schema_get)
        const hasil_schema2 = cekcek(data)

        expect(hasil_schema2, 'schema is not valid').to.be.true

    });

    it("Post Test", async function(){
        //tembak url dummyjson
        const newPost = {
            "title": "Gagah" ,
            "userId": 5
        }

        const hasilpost = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        })

        //validasi http status nya harus 201
        expect(hasilpost.status).to.equal(201)

        //validasi json schema
        const ajv = new Ajv()
        const data = await hasilpost.json();
        const cekcek = ajv.compile(schema_post)
        const hasil_schema = cekcek(data)

        expect(hasil_schema, 'schema is not valid').to.be.true
    });

})