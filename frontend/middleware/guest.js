export default function({store,redirect}){
    //console.log(store)
    if(store.getters.authenticated){
        return redirect("/dashboard")
    }
}