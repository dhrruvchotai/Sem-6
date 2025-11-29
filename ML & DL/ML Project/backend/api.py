from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import pickle

app = FastAPI()

class CardioData(BaseModel):
    age : int
    gender : int
    ap_hi : int
    ap_lo : int
    cholesterol	: int
    gluc : int
    smoke : int
    alco : int
    active: int
    bmi : float

@app.post("/predict")
def predict(data : CardioData):
    with open('model.pickle', 'rb') as file:
        features = [
            data.age, 
            data.gender, 
            data.ap_hi, 
            data.ap_lo, 
            data.cholesterol, 
            data.gluc, 
            data.smoke,
            data.alco, 
            data.active, 
            data.bmi
        ]
        final_input = np.array(features).reshape(1, -1)
        model = pickle.load(file)
        print(f'Pred :  {model.predict(final_input)}')
        return {"Output" : int(model.predict(final_input)[0])}
