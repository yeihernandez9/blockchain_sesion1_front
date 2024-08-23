import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const getChain = async () => {
        try {
            const response = await fetch('http://localhost:3000/chain');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching chain data:", error);
        }
    };

    const addChian= async (newBlockData) =>{
        try{
            const resonse = await fetch('http://localhost:3000/addBlock',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlockData)
            });
            const result = await resonse.json();
            setData((prevData) => [...prevData, result]);
        }catch(error){
            console.error("Error adding block:", error);
        }
    }

   

    useEffect(() => {
        getChain();
    }, []);

    return (
        <ApiContext.Provider value={{ data, getChain, addChian}}>
            {children}
        </ApiContext.Provider>
    );
};