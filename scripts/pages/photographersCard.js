 const photographersCard =  {
       constructor (photographersData) {
            this._name= photographersData.name
            this._id= photographersData.id
            this._city= photographersData.city
            this._country= photographersData.country
            this._tagline= photographersData.tagline
            this._price= photographersData.price
            this._portrait= photographersData.portrait
        },

        get name() {
            return  this._name
        },
        get id() {
            return  this._id
        },
        get city() {
            return  this._city
        },
        get country() {
            return  this_country
        },
        get tagline() {
            return  this._tagline
        },
        get price() {
            return  this._price
        },
        get portrait() {
            return  `/assets/photographers/${this._portrait}`
        },
    }