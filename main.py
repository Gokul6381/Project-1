from flask import request,jsonify,Flask


app=Flask(__name__)

@app.route('/insert',methods=["POST"])
def put(body):
     body = request.get_json()
     print(body['name'])
     responseBody = {
        "message": "Record Inserted Successfully",
        "status": 200
      }
     return responseBody


if __name__=="__main__":
     app.run(debug=True,port=8080)