# browser-camera

## Usage - How to run with docker

Execute the following commands:

1: docker build -t nromero125/browser-camera .

2: docker run -d -p 80:80 \
    -e "MAIL_HOST=smtp.example.com" \
    -e "MAIL_USER=user" \
    -e "MAIL_PORT=465" \
    -e "MAIL_PASS=secret" \
    -e "MAIL_TO=coding-challenge@mieterengel.de" \
    -e "MAIL_FROM=user@user.com" \
    -e "MAIL_TEXT=DOCUMENT" \
    -e "MAIL_SUBJECT=MIETERENGEL-DOC" \
    -e "REACT_APP_API=http://localhost" nromero125/browser-camera
