from collections import Counter
z = z_sm.split()
for i in range(len(z)):
    z[i] = z[i].lower()
    a = list(z[i])
    z[i] = "".join(j for j in a if j.isalpha())
