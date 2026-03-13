import tkinter as tk

# إنشاء النافذة
window = tk.Tk()
window.title("Calculator")
window.geometry("300x400")

# شاشة العرض
entry = tk.Entry(window, width=20, font=("Arial", 20), borderwidth=5, justify="right")
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# دالة إضافة رقم
def click(number):
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(0, str(current) + str(number))

# دالة مسح الشاشة
def clear():
    entry.delete(0, tk.END)

# دالة الحساب
def calculate():
    try:
        result = eval(entry.get())
        entry.delete(0, tk.END)
        entry.insert(0, result)
    except:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

# الأزرار
buttons = [
    ('7',1,0),('8',1,1),('9',1,2),('/',1,3),
    ('4',2,0),('5',2,1),('6',2,2),('*',2,3),
    ('1',3,0),('2',3,1),('3',3,2),('-',3,3),
    ('0',4,0),('.',4,1),('+',4,2)
]

for (text,row,col) in buttons:
    tk.Button(window, text=text, width=5, height=2, font=("Arial",14),
              command=lambda t=text: click(t)).grid(row=row, column=col)

# زر =
tk.Button(window, text="=", width=5, height=2, font=("Arial",14),
          command=calculate).grid(row=4, column=3)

# زر مسح
tk.Button(window, text="C", width=22, height=2, font=("Arial",14),
          command=clear).grid(row=5, column=0, columnspan=4)

window.mainloop()