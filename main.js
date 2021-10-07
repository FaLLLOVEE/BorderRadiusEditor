//border radius nas direções => [left, top, bottom, right]

const br_left   = document.querySelector("#r-left")
const br_top    = document.querySelector("#r-top")
const br_bottom = document.querySelector("#r-bottom")
const br_right  = document.querySelector("#r-right")

//input text

const inp_top    = document.querySelector("#inp-r-top")
const inp_right  = document.querySelector("#inp-r-right")
const inp_bottom = document.querySelector("#inp-r-bottom")
const inp_left   = document.querySelector("#inp-r-left")



// Rad e os cssCode 

const rad       = document.querySelector("#radius")
const cssCode   = document.querySelector(".content")

// Border radius Listeners ou ouvintes 

function BrListeners()
{
    function BorderRadiusUpdate()
    {
        const code = `${br_top.value}% ${br_right.value}% ${br_bottom.value}% ${br_left.value}%`
        rad.style.borderRadius = code
        inp_left.value   = `${br_left.value}%`
        inp_top.value    = `${br_top.value}%`
        inp_bottom.value = `${br_bottom.value}%`
        inp_right.value  = `${br_right.value}%`

    }
    function BorderRadiusUpdateByINP()
    {
        const code = `${inp_top.value} ${inp_right.value} ${inp_bottom.value} ${inp_left.value}`
        rad.style.borderRadius = code
        
        function GetReal(str)
        {
            return Number(str.slice(0, str.length - 1))
        }

        br_left.value   = GetReal(inp_left.value)
        br_top.value    = GetReal(inp_top.value)
        br_bottom.value = GetReal(inp_bottom.value)
        br_right.value  = GetReal(inp_right.value)

    }
    br_left.oninput   = BorderRadiusUpdate
    br_right.oninput  = BorderRadiusUpdate
    br_top.oninput    = BorderRadiusUpdate
    br_bottom.oninput = BorderRadiusUpdate

    inp_left.oninput   = BorderRadiusUpdateByINP
    inp_right.oninput  = BorderRadiusUpdateByINP
    inp_top.oninput    = BorderRadiusUpdateByINP
    inp_bottom.oninput = BorderRadiusUpdateByINP
    
}



window.onload = BrListeners