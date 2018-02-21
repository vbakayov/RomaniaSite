(function ($) {
    'use strict';

    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    function printPageBuilderDefault(table) {
        return '<html><head>' +
            '<style type="text/css" media="print">' +
            '  @page { size: auto;   margin: 25px 0 25px 0; }' +
            '</style>' +
            '<style type="text/css" media="all">' +
            'table{border-collapse: collapse; font-size: 12px; }\n' +
            'table, th, td {border: 1px solid grey}\n' +
            'th, td {text-align: center; vertical-align: middle;}\n' +
            'p {font-weight: bold; margin-left:20px }\n' +
            'h4 { margin-left:20px;font-weight: unset }\n' +
            'table { width:94%; margin-left:3%; margin-right:3%}\n' +
            'div.bs-table-print { text-align:center;}\n' +
            '</style></head><title>Dimensiunile</title><body>' +
            '<p>Printed on: ' + new Date + ' </p>' +
            '<p>http://www.prosopartizanat.ro/<p>'+
            '<h4>În cazul în care doriți să faceți o comandă, vă rugăm să ne contactați la telefon ( noi vorbim limba română) tel  sau ne contactați la adresa de email. Noi vă vom oferi cel mai bun preț posibil și o livrare la adresa Dvs. în România. <h4>'+
            '<div class="bs-table-print">' + table + "</div></body></html>";
    }
    $.extend($.fn.bootstrapTable.defaults, {
        showPrint: false,
        printSortColumn: undefined  , //String, set column field name to be sorted by
        printSortOrder: 'asc', //String: 'asc' , 'desc'  - relevant only if printSortColumn is set
        printPageBuilder: function(table){return printPageBuilderDefault(table)} // function, receive html <table> element as string, returns html string for printing. by default delegates to function printPageBuilderDefault(table). used for styling and adding header or footer
    });
    $.extend($.fn.bootstrapTable.COLUMN_DEFAULTS, {
        printFilter: undefined, //set value to filter by in print page
        printIgnore: false //boolean, set true to ignore this column in the print page
    });
    $.extend($.fn.bootstrapTable.defaults.icons, {
        print: 'glyphicon-print icon-share'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {
        this.showToolbar = this.options.showPrint;

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.showPrint) {
            var that = this,
                $btnGroup = this.$toolbar.find('>.btn-group'),
                $print = $btnGroup.find('button.bs-print');

            if (!$print.length) {
                $print = $([
                    '<button class="bs-print btn btn-default' + sprintf(' btn-%s"', this.options.iconSize) + ' name="print" title="print" type="button">',
                    sprintf('<i class="%s %s"></i> ', this.options.iconsPrefix, this.options.icons.print),
                    '</button>'].join('')).appendTo($btnGroup);

                $print.click(function () {
                    function buildTable(data,columns) {
                        var out = "<table><thead><tr>";
                        for(var h = 0; h < columns.length; h++) {
                            if(!columns[h].printIgnore) {
                                out += ("<th>"+columns[h].title+"</th>");
                            }
                        }
                        out += "</tr></thead><tbody>";
                        for(var i = 0; i < data.length; i++) {
                            out += "<tr>";
                            for(var j = 0; j < columns.length; j++) {
                                if(!columns[j].printIgnore) {
                                    out += ("<td>"+(data[i][columns[j].field]||"-")+"</td>");
                                }
                            }
                            out += "</tr>";
                        }
                        out += "</tbody></table>";
                        return out;
                    }
                    function sortRows(data,colName,sortOrder) {
                        if(!colName){
                            return data;
                        }
                        var reverse = sortOrder != 'asc';
                        reverse = -((+reverse) || -1);
                        return  data.sort(function (a, b) {
                            return reverse * (a[colName].localeCompare(b[colName]));
                        });
                    }
                    function filterRow(row,filters) {
                        for (var index = 0; index < filters.length; ++index) {
                            if(row[filters[index].colName]!=filters[index].value) {
                                return false;
                            }
                        }
                        return true;
                    }
                    function filterRows(data,filters) {
                        return data.filter(function (row) {
                            return filterRow(row,filters)
                        });
                    }
                    function getColumnFilters(columns) {
                        return !columns || !columns[0] ? [] : columns[0].filter(function (col) {
                            return col.printFilter;
                        }).map(function (col) {
                            return {colName:col.field, value:col.printFilter};
                        });
                    }
                    var doPrint = function (data) {
                        data=filterRows(data,getColumnFilters(that.options.columns));
                        data=sortRows(data,that.options.printSortColumn,that.options.printSortOrder);
                        var table=buildTable(data,that.options.columns[0]);
                        var newWin = window.open("");
                        newWin.document.write(that.options.printPageBuilder.call(this, table));
                        newWin.print();
                        newWin.close();
                    };
                    doPrint(that.options.data.slice(0));
                });
            }
        }
    };
})(jQuery);