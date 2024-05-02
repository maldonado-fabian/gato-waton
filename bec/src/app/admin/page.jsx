'use client'

import React from "react";
import { useState } from "react";
import UserRegModal from "@/components/UserRegModal";

const AdminPage = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
    <div className="flex justify-center items-center ">
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Administración de Biblioteca</h1>
            <div className="flex justify-center space-x-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" 
                    type="button"
                    onClick={() => {setOpenModal(true)}} 
                >
                    Registrar Usuario
                </button>

                <UserRegModal open={openModal} onClose={() => {setOpenModal(false)}}>
                    <div className="p-6">
                        <h3 className="font-bold text-2xl mb-4">Formulario para registrar un nuevo usuario</h3>
                        <div>
                            <form action="" method="post" className="space-y-4">
                                <div className="space-x-2 flex flex-cool">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-1">
                                        Nombres y Apellidos:
                                    </label>
                                    <input className="text-gray-400 bg-green-600py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    type="text" name="name" id="name" required/>
                                </div>
                                <div className="space-x-2 flex flex-col">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">
                                        Correo electrónico:
                                    </label>
                                    <input className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    type="email" name="email" id="email" required/>
                                </div>
                            </form>
                        </div>
                    </div>
                </UserRegModal>

                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="button">
                    Subir Documento
                </button>
            </div>
            
        </div>
    </div>
    ) 
}

export default AdminPage;