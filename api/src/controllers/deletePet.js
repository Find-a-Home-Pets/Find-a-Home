/*
Idealmente seria hacer una pila de peticiones para cada perro, para así evitar un poco algunos problemas
con respecto al tema de funciones asyncronas accediento al mismo tiempo a la database con peticiones que puedan 
llegar a conflictos.



ESTRATEGIA deletePet

Deleting pet algorithm is expensive but necessary:
1) Buscar PET
2) Del PET: Obtener lista de usuarios que enviaron solicitudes
3) De cada USER: Borrar solicitud
4) Buscar OWNER
5) Del OWNER: Quitar el perro de su lista
6) actualizar todos


*/
const UserModel = require('../models/user.model');
const PetModel = require('../models/pet.model');
const async = require('async');
const deletePet = async (petID) => {
    //-----1)
    const pet = await PetModel.findOne({ _id: petID })
    if (!pet) throw new Error('La mascota no existe')
    //-----2)     solicitudes: {'interestedEmail','FullName', 'requestMessage', 'profilePic'}
    async.each(pet.solicitudes, async (solicitud) => {
        const interestedUser = await UserModel.findOne({ email: solicitud.email });//Busca usuario 
        const indexDeSolicitudUser = interestedUser.misSolicitudes.findIndex(el => el.petID === petID)//Busca index de solicitud
        interestedUser.misSolicitudes.splice(indexDeSolicitudUser, 1);//borra solicitud del usuario 
        await interestedUser.save();
    }, (err) => { if (err) {console.error('Un errrrr: '+err.message); }});
    //-----3)  buscar OWNER    
    const owner = await UserModel.findOne({ email: pet.owner });
    //-----4) Del OWNER: Quitar el perro de su lista   
     const ownerPetIndex = owner.pets.findIndex(el => el === petID)//Busca pet de solicitud
     owner.pets.splice(ownerPetIndex, 1);//borra solicitud del usuario 
     await owner.save(); 
    //-----5) Borrar perro
        const deletedPet = await PetModel.deleteOne({ _id: petID})
    return deletedPet
}

module.exports = {deletePet}