

f = open("adSites.txt", "r")
f2 = open("rules.json", "w")
idx = 0
lines = f.readlines()
f2.write("[\n")
for idx, x in enumerate(lines):
    f2.write("\t{\n")
    f2.write("\t\t\"id\": " + str(idx + 1) + ",\n")
    f2.write("\t\t\"priority\": 1,\n")
    f2.write("\t\t\"action\": " + "{\"type\": \"block\"},\n")
    f2.write("\t\t\"condition\": " + "{\"urlFilter\": \"" + x.strip() + "\"}" )
    
    # Check if the current line is the last one
    if idx == len(lines) - 1:
        f2.write("\n}\n")  # Don't add a comma for the last entry
    else:
        f2.write("\n\t},\n")

f2.write("]\n")

f.close()
f2.close()