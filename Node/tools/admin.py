import getpass
import pyperclip
import bcrypt

password = getpass.getpass()
bytes = password.encode("utf-8")
salt = bcrypt.gensalt()
password = bcrypt.hashpw(bytes, salt)
password = password.decode("utf-8")
pyperclip.copy(password)
