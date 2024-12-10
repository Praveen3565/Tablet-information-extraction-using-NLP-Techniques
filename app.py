from flask import Flask, request, render_template, jsonify
import json

app = Flask(__name__)

# Load tablet data from JSON file
with open('models/tablet_data.json', 'r') as file:
    tablet_data = json.load(file)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/search', methods=['POST'])
def search():
    tablet_name = request.form['tablet_name'].lower()
    print(f"Searching for tablet: {tablet_name}")  # Log the tablet name

    if tablet_name in tablet_data["medications"]:
        response = tablet_data["medications"][tablet_name]
        print(f"Found tablet: {response}")  # Log the found tablet information
        return jsonify(response)
    else:
        print("Tablet not found")  # Log when the tablet is not found
        return jsonify({"error": "Tablet not found"})

if __name__ == '__main__':
    app.run(debug=True)
