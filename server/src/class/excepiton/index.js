module.exports=class extends Error{
    constructor(error){
        super(error);
        this.code=error.code;
        this.message=error.message;
    }
}