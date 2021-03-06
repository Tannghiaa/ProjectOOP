class BasketballPlayer extends Athlete{
    #_throwingforce;
    #_obstacle;
    #_leadTheball;
    #_speed;
    #_kythuat = Enum.kyThuat;
    #_theluc = Enum.theLuc;

    get Kythuat(){
        return this.#_kythuat;
    }

    get Theluc(){
        return this.#_theluc;
    }
    set Throwingforce(throwingforce){
        if(throwingforce > 0 && throwingforce <= 100){
            this.#_throwingforce = throwingforce;
        }
        else{
            throw new Error("Error throwingforce Basketball Player!");
        }
    }
    get Throwingforce(){
        return this.#_throwingforce;
    }

    set Obstacle(obstacle){
        if(obstacle > 0 && obstacle <= 100){
            this.#_obstacle = obstacle;
        }
        else{
            throw new Error("Error obstacle Basketball Player!");
        }
    }
    get Obstacle(){
        return this.#_obstacle;
    }

    set LeadTheball(leadTheball){
        if(leadTheball > 0 && leadTheball <= 100){
            this.#_leadTheball = leadTheball;
        }
        else{                           
            throw new Error("Error leadTheball Basketball Player!");
        }
    }
    get LeadTheball(){
        return this.#_leadTheball;
    }
    set Speed(speed){
        if(speed > 0 && speed <=100){
            this.#_speed = speed;
        }
        else{
            throw new Error("Error speed Basketball Player!");
        }
    }
    get Speed(){
        return this.#_speed;
    }

    constructor(name, age, sex, height, weight, nationality, sport,speed, throwingforce, obstacle, leadTheball){
        super(name, age, sex, height, weight, nationality, sport);
        this.Speed = speed;
        this.Throwingforce = throwingforce;
        this.Obstacle = obstacle;
        this.LeadTheball = leadTheball;
    }

    Match(){
        if(this.#_theluc > 50){
            this.#_theluc = this.#_theluc - (this.#_theluc * 20/100);
            this.#_kythuat += 3;
        }
        else{
            alert('Kh??ng ????? th??? l???c');
        }
    }

    Practice(){
        if(this.#_kythuat < 100){
            this.#_kythuat += 4;
        }
    }

    ThongTin(){
        super.ThongTin();
        document.querySelector('#index').innerHTML  ="Chi???u cao: " + this.Height+  "<br>"
                                                    +"T???c ?????: "    + this.Speed +  "<br>"
                                                    +"N??m: "       + this.Throwingforce+  "<br>"
                                                    +"Truy c???n: "  + this.Obstacle+ "<br>"
                                                    +"D???n b??ng: " + this.LeadTheball+"<br>"
                                                    +"K??? thu???t: "  + this.Kythuat+"<br>"
                                                    +"Th??? l???c: "  + this.Theluc+"<br>"
       
    }
    

}
