Sub hard()

Dim Stock_symbol As String

Dim stock_open As Double
stock_open = 0

dim stock_close as Double
stock_close = 0

Dim Stock_list_row As Integer
Stock_list_row = 2

dim great_increase as Integer
great_increase = 0

dim great_decrease as Integer
great_decrease = 0

dim great_total as Integer
great_total = 0

Dim last_row As Long
last_row = Cells(Rows.Count, 1).End(xlUp).Row

Cells(1, 9).Value = "<Ticker>"
Cells(1, 10).Value = "<Open>"
Cells(1, 11).Value = "<Close>"
Cells(1, 12).value = "<Change>"
Cells(1, 13).value = "<Percent Change>"
Cells(1, 14).value = "<Total Stock>"

'because there is no change in ticket must establsih open for first ticker
Cells(2, 10).Value = Cells(2, 3).Value

For i = 2 To last_row

'when switching to a new symbol run this
If Cells(i + 1, 1).Value <> Cells(i, 1).Value Then

Stock_symbol = Cells(i, 1).Value

stock_close = Cells(i, 6).Value

stock_open = Cells(i +1,3).value

stock_total = stock_total + cells(i, 7).value

Range("I" & Stock_list_row).Value = Stock_symbol

Range("K" & Stock_list_row).Value = stock_close

Range("J" & stock_list_row + 1).value = stock_open

Range("N" & stock_list_row).value = stock_total

Stock_list_row = Stock_list_row + 1

stock_total = 0

else

stock_total = stock_total + Cells(i, 7).Value

End If

Next i

'change last row variable to be the last row of our new data
last_row = Cells(Rows.Count, 9).End(xlUp).Row

for i = 2 to last_row

Cells(i,12).value = cells(i,10).value - cells(i,11).value
Cells(i, 13).value = cells(i,12).value / cells(i, 10).value
Cells(i, 13).NumberFormat="0.000%"

    if Cells(i,12).value > 0 then 
    Cells(i, 12).interior.colorindex = 4
    Cells(i, 13).interior.colorindex = 4

    elseif Cells(i, 12).value < 0 then
    Cells(i, 12).interior.colorindex = 3
    Cells(i, 13).interior.colorindex = 3

end if

Next i

Cells (1, 17).value = "<Ticker>"
Cells (1, 18).value = "<Value>"
Cells (2, 16).value = "Greatest % Increase"
Cells (3, 16).value = "Greatest % Decrease"
Cells (4, 16).value = "Greatest Total Volume"

for i = 2 to last_row

if cells(i, 13).value > cells(2, 18).value then
cells(2, 17).value = cells(i, 9).value
cells(2, 18).value = cells(i, 13).value

end if

next i

for i = 2 to last_row

if cells(i, 13).value < cells(3, 18).value then
cells(3, 17).value = cells(i, 9).value
cells(3, 18).value = cells(i, 13).value

end if

next i

for i = 2 to last_row

if cells(i, 14).value > cells(4, 18).value then
cells(4, 17).value = cells(i, 9).value
cells(4, 18).value = cells(i, 14).value

end if

next i


end sub