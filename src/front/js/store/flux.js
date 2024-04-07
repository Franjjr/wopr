const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [{title: "FIRST", background: "white", initial: "white"},
            {title: "SECOND", background: "white", initial: "white"}],
      suppliers:[],
      references:[],
      formats:[],
      isLogin:false,
      rol:[],
      name:[],
    },
    actions: {
      login: async () => {
        setStore({ isLogin: true});
        setStore({ rol:localStorage.getItem("rol")});
        setStore({ name:localStorage.getItem('name')});
        await getActions().getSuppliers();
        await getActions().getReferences();
        await getActions().getFormats();
      },
      // Logica del Logout
      // logout: async () => {
      //   setStore({isLogin:false});
      //   setStore({rol:[]});
      //   setStore({name:[]});
      //   setStore({token:[]});
      //   setStore({suppliers:[]});
      //   setStore({references:[]});
      //   setStore({formats:[]});
      //   localStorage.clear();
      // },
      // Use getActions to call a function within a fuction
      getSuppliers : async () => {
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
      },

      getReferences : async () => {
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
      },

      getFormats : async () => {
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
      },

      getRecipes : async () => {
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
        console.log(data);
      },

      exampleFunction: () => { getActions().changeColor(0, "green"); },
      getMessage: async () => {
        try {
          // Fetching data from the backend
          const url = process.env.BACKEND_URL + "/api/hello";
          const options = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          const response = await fetch(url, options)
          const data = await response.json()
          setStore({ message: data.message })
          return data;  // Don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error)
        }
      },
      changeColor: (index, color) => {
        const store = getStore();  // Get the store
        // We have to loop the entire demo array to look for the respective index and change its color
        const demo = store.demo.map((element, i) => {
          if (i === index) element.background = color;
          return element;
        });
        setStore({ demo: demo });  // Reset the global store
      }
    }
  };
};

export default getState;
