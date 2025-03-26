import fetch from 'node-fetch';
import { expect } from 'chai';

describe("API Test Suite coba", function(){
    const baseURL = 'https://dummyjson.com'

    it("Get Test", async function(){
        //tembak url dummyjson
        const hasil = await fetch('https://dummyjson.com/carts/1')

        //validasi http status nya harus 200
        expect(hasil.status, 'ada yang salah').to.equal(200)

    });

    it("Post Test", async function(){
        const newPost = {
            "title": "Gagah" ,
            "userId": 5
        }

        const hasilpost = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        })
    })

})