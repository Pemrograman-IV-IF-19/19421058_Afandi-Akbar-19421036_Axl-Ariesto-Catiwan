const { model } = require('mongoose')
const mobilModel = require('../model/mobilModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId


exports.inputMobil = (data) =>
    new Promise(async(resolve, reject) => {
        await mobilModel.create(data)
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Membuat Data Mobil'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })

exports.getAllMobil = () =>
    new Promise(async(resolve, reject) => {
        mobilModel.aggregate([
            {
                $lookup:
                  {
                    from: "kategoris",
                    localField: "idKategori",
                    foreignField: "_id",
                    as: "kategoriMobil"
                  }
             },
             {$unwind: "$kategoriMobil"}
        ])
            .then(dataMobil => {
                if (dataMobil.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil Memuat Data Mobil',
                        data: dataMobil
                    })
                }else{
                    reject({
                        status: false,
                        msg: 'Mobil Tidak Tersedia'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
    })

exports.getMobilByName = (name) =>
    new Promise(async(resolve, reject) => {
        mobilModel.aggregate([ 
        { $match: {namaMobil: name }},
        {
            $lookup:
              {
                from: "kategoris",
                localField: "idKategori",
                foreignField: "_id",
                as: "kategoriMobil"
              }
         },
         {$unwind: "$kategoriMobil"}
        ])
            .then(dataMobil => {
                if (dataMobil) {
                    resolve({
                        status: true,
                        msg: 'Berhasil Memuat Data',
                        data: dataMobil
                    })
                }else{
                    reject({
                        status: false,
                        msg: 'Mobil Tidak Tersedia'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
})

exports.getMobilById = (id) =>
    new Promise(async(resolve, reject) => {
        mobilModel.aggregate([ 
            { $match: {_id: objectId(id) }},
            {
                $lookup:
                  {
                    from: "kategoris",
                    localField: "idKategori",
                    foreignField: "_id",
                    as: "kategoriMobil"
                  }
             },
             {$unwind: "$kategoriMobil"}
        ])
            .then(dataMobil => {
                if (dataMobil) {
                    resolve({
                        status: true,
                        msg: 'Berhasil Memuat Data Mobil',
                        data: dataMobil
                    })
                }else{
                    reject({
                        status: false,
                        msg: 'Mobil Tidak Tersedia'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
})


exports.updateMobil = (id, data) =>
    new Promise(async(resolve, reject) => {
        mobilModel.updateOne({ _id: objectId(id) }, data)
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Merubah Data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })

exports.updateGambar = (id, gambar) =>
new Promise(async(resolve, reject) => {
    mobilModel.updateOne({ _id: objectId(id) }, {$set: { gambar: gambar} })
        .then(() => {
            resolve ({
                status: true,
                msg: 'Berhasil Merubah gambar'
            })
        }).catch(err => {
            reject({
                status: false,
                msg: 'Terjadi Kesalahan pada Server'
            })
        })
})

exports.deleteMobil = (id) =>
    new Promise(async(resolve, reject) => {
        mobilModel.deleteOne({ _id: objectId(id) })
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Menghapus data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })