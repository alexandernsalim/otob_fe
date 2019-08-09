export default{
    name: 'config',
    method: {
        getConfig: function () {            
            const axiosConfig = {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            
            return axiosConfig
        }
    }
}