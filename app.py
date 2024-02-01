from flask import Flask, render_template, request, send_from_directory, jsonify

app = Flask(__name__)


@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(app.root_path + '/static/js/', filename, mimetype='application/javascript')


@app.route('/')
def home():
    return render_template('home.html', active_page='path')


if __name__ == '__main__':
    app.run(debug=True)

