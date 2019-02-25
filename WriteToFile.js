function WriteToFile(passForm) {
    
    set fso = CreatObject("Scipting.FileSystemObject");
    set s   = fso.CreatTextFile("__dirname/Flights.txt", True);

    var NS = document.getElementById('NS');
    var EW = document.getElementById('EW');
    var alt = document.getElementById('alt');
    var Desc = document.getElementById('Desc');

    s.Writeline("NS :" + NS);
    s.Writeline("EW :" + EW);
    s.Writeline("alt :" + alt);
    s.Writeline("Desc :" + Desc);

    s.writeline("---End---");
    s.Close();
}