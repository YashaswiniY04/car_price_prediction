from flask import Flask,render_template,request
import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('RFRM.pkl', 'rb'))   #ml model

@app.route('/', methods=['GET','POST'])
def Login():
    return render_template('index.html', Result="")  

@app.route('/home',methods=['GET','POST'])
def Home():
    result=""
    if request.method == 'POST':
        y = request.form.get("Year")
        Year=int(y or 0)

        uploaded_img = request.files['Image']
      
        print("Imag = "+str(uploaded_img.filename))

        pp=request.form.get('Present_Price')
        Present_Price=float(pp or 0)

        hp=request.form.get('Horsepower')
        horsepower=float(hp or 0)

        kms=request.form.get('Kms_Driven')
        Kms_Driven=int(kms or 0)
        Kms_Driven2=float(np.log(Kms_Driven))

        ow=request.form.get('Owner')
        Owner=int(ow or 0)

        ft=request.form.get('Fuel_Type_Petrol')
        Fuel_Type_Petrol=str(ft)

        if(Fuel_Type_Petrol=='Petrol'):
                Fuel_Type_Petrol=1
                Fuel_Type_Diesel=0
        else:
            Fuel_Type_Petrol=0
            Fuel_Type_Diesel=1
        Year=2021-Year

        st=request.form.get('Seller_Type_Individual')
        Seller_Type_Individual=str(st)

        if(Seller_Type_Individual=='Individual'):
            Seller_Type_Individual=1
        else:
            Seller_Type_Individual=0	
        tm=request.form.get('Transmission_Manual')
        Transmission_Manual=str(tm)

        if(Transmission_Manual=='Manual'):
            Transmission_Manual=1
        else:
            Transmission_Manual=0
            
        prediction=model.predict([[Present_Price,round(Kms_Driven2,4),Owner,Year,Fuel_Type_Diesel,Fuel_Type_Petrol,Seller_Type_Individual,Transmission_Manual]])
        output=round(prediction[0],2)
        output=round((output+((horsepower-102)*837)/1000000),2)
        output=output*100
        tempCar=str(uploaded_img.filename).find("car")
        if tempCar >= 0:
         result="Predicted Price is equal to  $"+str(output)
        else:
           result="Please upload Car image"
        print(result)
    return render_template('index1.html',Result=result)  

if __name__=="__main__":
    app.run(debug=True)
