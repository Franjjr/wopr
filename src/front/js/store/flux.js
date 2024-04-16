

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      suppliers:[],
      references:[],
      formats:[],
      recipes:[],
      lineRecipes:[],
      lineEditRecipes:[],
      manufacturing:[],
      previsions:[],
      deliveryNotes:[],
      currentDeliveryNotes: { },
      isLogin: false,
      rol: null,
      name: null,
      currentRecipes: { }, 
      currentEditRecipes: { },
      sumLineActive: false,
    },
    actions: {
      login: async () => {
        setStore({ isLogin: true});
        setStore({ rol:localStorage.getItem("rol")});
        setStore({ name:localStorage.getItem('name')});
        await getActions().getSuppliers();
        await getActions().getReferences();
        await getActions().getFormats();
        await getActions().getRecipes();
        await getActions().getDeliveryNotes();
        // await getActions().getManufacturing();
        // await getActions().getPrevisions();
      },
      
      logout: () => {
        setStore({ isLogin: false});
        setStore({ rol: null});
        setStore({ name: null});
        setStore({ suppliers: []});
        setStore({ references: []});
        setStore({ formats: []});
        setStore({ recipes: []});
        setStore({ manufacturing: []});
        setStore({ previsions: []});
        setStore({ deliveryNotes: []});
      },
      
      sumLineOn: () => {
        setStore({ sumLineActive: true })
      },

      sumLineOff: () => {
        setStore({ sumLineActive: false })
      },

      selectRecipes : (row) => {
        setStore({currentRecipes: [] })
        setStore({currentRecipes: row })
      },

      selectRecipesEdit : (row) => {
        setStore({currentEditRecipes: [] })
        setStore({currentEditRecipes: row })
      },
      
      getLinesEditRecipes : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/line_recipes/" + getStore().currentEditRecipes.id;
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({lineEditRecipes:data.data});
          console.log('lineEditRecipes: ', data);
        }
      },

      selectDeliveryNotes : (row) => {
        setStore({currentDeliveryNotes: row })
      },

      getSuppliers : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/suppliers/2"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error Suppliers', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({suppliers:data.data});
          console.log('supplier',data);
        }
      },

      getReferences : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/references/2"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error References', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({references:data.data});
          console.log('Reference', data);
        }
      },

      getFormats : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/products_formats/2"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error Format', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({formats:data.data});
          console.log('Format', data);
        }
      },

      getRecipes : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/recipes"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({recipes:data.data});
          console.log('Recipes: ', data);
        }
      },

      getLinesRecipes : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/line_recipes/" + getStore().currentRecipes.id;
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({lineRecipes:data.data});
          console.log('lineRecipes: ', data);
        }
      },

      getDeliveryNotes : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/delivery_notes"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          console.log('DeliveryNotes: ', data);
          setStore({deliveryNotes: data.results});
        }
      },

      getManufacturing : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/manufacturing_ord"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({manufacturing:data.data});
          console.log('Ordenes de Fabricacion: ', data);
        }
      },

      getPrevisions : async () => {
        const login = getStore().isLogin;
        if (login) {
          const base_url = process.env.BACKEND_URL;
          const url = base_url + "/api/previsions"
          const options = {
            method: 'GET',
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
          };
          const response = await fetch(url, options);
          if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return response.status;
          }
          const data = await response.json();
          setStore({previsions:data.data});
          console.log('Previsiones: ', data);
        }
      },
    }
  };
};

export default getState;
