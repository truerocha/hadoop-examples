create view dfs.tmp.CAL_POWERS_CT as select  
    convert_from(t.data.description, 'utf8') as description
  , convert_from(t.data.two_powers_as_int, 'int_be') as two_powers_as_int
  , convert_from(t.data.two_powers_as_bigint, 'bigint_be') as two_powers_as_bigint
  , convert_from(t.data.pi_powers_as_float, 'float_be') as pi_powers_as_float
  , convert_from(t.data.pi_powers_as_double, 'double_be') as pi_powers_as_double
from hbase.`/test/maprdb/powers` t
;
