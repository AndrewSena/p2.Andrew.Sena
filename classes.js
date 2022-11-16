
class Box{
    constructor(w,h, w2 ,h2, posX, posY, fill, text, text_fill) {
        this.w = w
        this.h = h
        this.w2 = w2
        this.h2 = h2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.header = text
        this.information;
        this.text_fill = text_fill
        this.is_over = false
        this.drag = false
        this.offsetX = 0
        this.offsetY = 0
    }

    display(){
        this.check_mouseover()
        this.update();
        this.is_over ? fill(200) :fill(this.fill)
        rect(this.posX, this.posY, this.w, this.h)
        rect(this.posX-75, this.posY+20, this.w2 , this.h2 );
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(this.header, this.posX + (this.w/2), this.posY + (this.h/2))
        textAlign(LEFT, TOP)
        
    }

    update(){
        if(this.drag){
            this.posX = mouseX + this.offsetX;
            this.posY = mouseY + this.offsetY;
        }
        
    }

    check_mouseover(){
        if (mouseX >= this.posX && mouseX <= this.posX + this.w && mouseY >= this.posY && mouseY <= this.posY + this.h){
            this.is_over = true
        }
        else this.is_over = false

        
    }
    _pressed(){
        if(mouseX > this.posX && mouseX < this.posX + this.w && mouseY > this.posY && mouseY < this.posY + this.h){
            this.drag = true;
            this.offsetX = this.posX - mouseX;
            this.offsetY = this.posY - mouseY;
        }
    }

    released(){
        this.drag = false;
    }

    getInformation(inpTable){
        for(let i = 0; i < int(inpTable.getRowCount()); i++){
            for(let j = 0; j < int(inpTable.getColumnCount()); j++){
                this.information = inpTable.getString(i, j)
                text(this.information, this.posX-70+150*j, this.posY+30+ i*25)
            }
        }
        
    }
}
